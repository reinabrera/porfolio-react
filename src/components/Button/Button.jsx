import "./button.scss";

export default function Button({children, type, customClass}) {
  return (<button type={type} className={`btn--primary base ${customClass?.length > 0 ? customClass : ""}`}>{children}</button>)
}