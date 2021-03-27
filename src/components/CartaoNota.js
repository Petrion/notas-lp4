import "./CartaoNota.css";

function CartaoNota(props) {
  return (
    <section className="cartao-nota">
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
    </section>
  );
}

export default CartaoNota;
