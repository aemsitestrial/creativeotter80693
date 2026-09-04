export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 5) {
    return;
  }

  const image = rows[0]?.textContent?.trim();
  const name = rows[1]?.textContent?.trim();
  const title = rows[2]?.textContent?.trim();
  const experience = rows[3]?.textContent?.trim();
  const description = rows[4]?.textContent?.trim();

  block.innerHTML = `
    <div class="employee-profile-card">
      ${image}

      <h2 class="employee-profile-name">
        ${name}
      </h2>

      <h3 class="employee-profile-title">
        ${title}
      </h3>

      <p class="employee-profile-experience">
        ${experience}
      </p>

      <p class="employee-profile-description">
        ${description}
      </p>
    </div>
  `;
}