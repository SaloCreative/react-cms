export const validate = (field, name, ...validations) => {
  return (state) => {
    for (let v  of validations) {
      let errorMessageFunc = v(state[field], state);
      if (errorMessageFunc) {
        return {[field]: errorMessageFunc(name)};
      }
    }
    return null;
  };
};

export const runValidation = (state, validators) => {
  return validators.reduce((memo, validate) => {
    return Object.assign(memo, validate(state));
  }, {});
};