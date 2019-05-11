// export default는 기존방식과 동일..
import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
