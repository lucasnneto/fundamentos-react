export default ({ max, min }) => {
  const aleatorio = parseInt(Math.random() * (max - min) + min);
  return (
    <>
      <p>
        Min: {min} - Max: {max}
      </p>
      <p>Gerado: {aleatorio}</p>
    </>
  );
};
