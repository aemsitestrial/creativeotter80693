export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 4) {
    return;
  }

  const name = rows[0]?.textContent?.trim();
  const title = rows[1]?.textContent?.trim();
  const imageCell = rows[2];
  const descriptionCell = rows[3];

  const picture = imageCell?.querySelector('picture');
  const img = picture?.querySelector('img');
  if (img) {
    img.classList.add('employee-profile-image');
  }

  block.innerHTML = `
    <div class="employee-profile-card">
      ${picture ? picture.outerHTML : ''}

      <h2 class="employee-profile-name">
        ${name}
      </h2>

      <h3 class="employee-profile-title">
        ${title}
      </h3>

      <div class="employee-profile-description">
        ${descriptionCell ? descriptionCell.innerHTML : ''}
      </div>
    </div>
  `;
}
