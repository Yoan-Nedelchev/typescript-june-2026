import { services } from "../services/serviceInstances";
import type { User } from "../types/user";
import { HtmlRenderer } from "../utils/htmlRenderer";

function singleUserTemplate(user: User) {
  return `
    <li class="card">
        <h3>${user.name}</h3>
        <p>${user.company.name}</p>
    </li>`;
}

export async function userTemplate() {
  const res = await services.usersService.getAll();

  const template = `
    <section class="list-page">
      <h1>Users</h1>
      <ul class="card-grid">
          ${res.map((user) => singleUserTemplate(user)).join("")}
      </ul>
    </section>`;

  HtmlRenderer.render(template);
}
