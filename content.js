const orderRegex = /\b([A-Z0-9]{3}-\d{7}-\d{7})\b/;

function buildLink(orderId) {
  return `https://www.amazon.de/gp/your-account/order-details?ie=UTF8&orderID=${orderId}`;
}

function convertMemoCell(cell) {
  const txt = cell.textContent;
  const match = orderRegex.exec(txt);
  if (!match) return;
  if (cell.querySelector('.amazon-link')) return;

  const link = document.createElement('a');
  link.className = 'amazon-link';
  link.href = buildLink(match[1]);
  link.target = '_blank';
  link.textContent = '🔗 Bestellung';

  cell.prepend(' ', link);
}

function scanAll() {
  document.querySelectorAll('.ynab-grid-cell-memo').forEach(convertMemoCell);
}

scanAll();

const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    m.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        if (node.matches?.('.ynab-grid-cell-memo')) convertMemoCell(node);
        node.querySelectorAll?.('.ynab-grid-cell-memo').forEach(convertMemoCell);
      }
    });
  }
});
observer.observe(document.body, {childList: true, subtree: true});