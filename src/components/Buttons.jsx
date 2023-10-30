export default function Buttons(props) {
    const { onClick, text } = props;

    return <button onClick={props.onClick}>{props.text}</button> ;
}