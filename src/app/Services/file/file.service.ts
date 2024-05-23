import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private worker: Worker;

  constructor() {
    this.worker = new Worker(new URL('../../Workers/file.worker', import.meta.url));
  }

  createFile(content: string, fileName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.worker.onmessage = ({ data }) => {
        setTimeout(() => {
          const { url, fileName } = data;
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          a.click();
          URL.revokeObjectURL(url);
          resolve();
        }, 10000)

      };

      this.worker.onerror = (error) => {
        reject(error);
      };

      this.worker.postMessage({ content, fileName });
    });
  }
}
