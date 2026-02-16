export default function ErrorMessage({ message = 'Something went wrong.' }) {
  return <p className="state-message error">{message}</p>
}
