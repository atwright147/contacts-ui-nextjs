---
to: src/app/<%= name.toLowerCase() %>/page.tsx
---
import styles from './page.module.scss';

export default async function Page() {
  // const res = await fetch('http://localhost:3001/api/v1/data', { next: { tags: ['data/all'] } });
  // const contacts = await res.json();

  return (
    <div
      className={styles.page}
      data-testid="<%= name.toLowerCase() %>"
    >
      <h1>Page works!</h1>
    </div>
  );
}
