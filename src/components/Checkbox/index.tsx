import React from 'react';
import {Container, CheckFull, CheckEmpty, Title} from './style';
import {Props} from './types';
const Checkbox = ({checked, completed, name, onPress}: Props) => {
  const renderChecked = () => {
    return (
      <CheckEmpty disabled={completed}>
        {(checked || completed) && <CheckFull disabled={completed} />}
      </CheckEmpty>
    );
  };

  return (
    <Container onPress={onPress} disabled={completed}>
      {renderChecked()}
      <Title disabled={completed}>{name}</Title>
    </Container>
  );
};

export default Checkbox;
