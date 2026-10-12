export default function copyToClipboard(text: string, type: string) {
  navigator.clipboard.writeText(text);
  alert(`Copied ${type} to clipboard`);
}