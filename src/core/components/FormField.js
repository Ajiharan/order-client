import React from "react";
import InputText from "./InputText";
import SelectField from "./SelectField";
import AutoCompleteField from "./AutoCompleteField";
import InputCheck from "./InputCheck";

const FormField = (props) => {
  const components = {
    text: InputText,
    select: SelectField,
    auto: AutoCompleteField,
    check: InputCheck,
  };

  const renderDynamic = () => {
    return React.createElement(components[props.type], props);
  };

  return <React.Fragment>{renderDynamic()}</React.Fragment>;
};

export default React.memo(FormField);
