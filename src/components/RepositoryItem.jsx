function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.title ?? "default"}</strong>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.link}>Acessar Repositório</a>
    </li>
  );
}

export default RepositoryItem;
