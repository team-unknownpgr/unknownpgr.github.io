import Link from "next/link";
import IMetadata from "../../interfaces/IMetadata";
import styles from "./postList.module.scss";

function formatDate(d: Date, displayTime = false) {
  let ret =
    ("0" + d.getUTCDate()).slice(-2) +
    "-" +
    ("0" + (d.getUTCMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear();
  if (displayTime) {
    ret +=
      " " +
      ("0" + d.getUTCHours()).slice(-2) +
      ":" +
      ("0" + d.getUTCMinutes()).slice(-2);
  }
  return ret;
}

export default function PostList({ metadata }: { metadata: IMetadata }) {
  return (
    <div className={styles.list}>
      {Object.values(metadata).map(({ name, title, date, category }) => (
        <Link key={name} href={`/posts/${name}`}>
          <div className={styles.post}>
            <div>
              <strong>{title}</strong>
            </div>
            <div className={styles.metadata}>
              {formatDate(new Date(date))} / {category}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
