/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const { content, fileName } = data;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  postMessage({ url, fileName });
});
