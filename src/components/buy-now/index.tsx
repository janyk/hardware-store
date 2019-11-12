import React from 'react';
import { Button } from '../button';

interface ButtonProps {
  total: number;
}

const BuyNow: React.FC<ButtonProps> = ({ total }) => {

  return (
    <Button
              text={`Buy now!`}
              action={() => console.log('woot')}
              />
  );
}

//@ts-ignore
export default BuyNow;
