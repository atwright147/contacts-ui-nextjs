---
to: src/app/<%= route %>/page.tsx
---
import styles from './page.module.scss';

export default async function Page() {
  // const res = await fetch('http://localhost:3001/api/v1/data', { next: { tags: ['data/all'] } });
  // const data = await res.json();

  return (
    <div
      className={styles.page}
      data-testid="<%= h.changeCase.lower(name) %>"
    >
      <h1><%= name %> page works!</h1>
    </div>
  );
}
