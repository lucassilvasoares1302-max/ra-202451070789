
export default function ProjetoCard({
  titulo,
  children
}) {
  return (
    <article className="card projeto">
      <h3>{titulo}</h3>
      {children}
    </article>
  );
}
