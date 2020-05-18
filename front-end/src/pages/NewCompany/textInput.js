import React, { Component } from "react";
import MaskedInput from "react-text-mask";

export class TextInput extends Component {
  render() {
    const { inputRef, ...other } = this.props;

    return (
      <MaskedInput
        {...other}
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/,')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholder="(DD)0000-0000"
      />
    );
  }
}
