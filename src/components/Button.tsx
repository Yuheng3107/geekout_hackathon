export default function Button(props: any) {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      type={props.type}
      className={`${props.className} p-3 rounded-xl`}
    >
      {props.children}
    </button>
  );
}
