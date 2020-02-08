import { CurrentModule, React, useApp } from '../CurrentModule';
const Template = () => {
  const { state, actions } = useApp();

  return (
    <React.Fragment>
      code goes here
    </React.Fragment>
  );
};

export default Template;
CurrentModule(Template);