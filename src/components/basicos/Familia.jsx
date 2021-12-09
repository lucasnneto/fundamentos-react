import {
  cloneElement,
  //  Children
} from "react";
export default (props) => {
  return (
    <div>
      {props.children.map((el, i) => {
        return cloneElement(el, { ...props, key: i });
      })}
      {/* Children.map(props.children,(el, i) => {
        return cloneElement(el, { ...props, key: i });
      }) */}
      {/*  Children é mais seguro quando n enviar filhos ou quando so tiver um filho */}
    </div>
  );
};
