import React, { FC } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import { Container } from '@chakra-ui/react';
import 'components/organisms/CounterBoard.css';
import EnhancedColorfulBeads from 'containers/molecules/ColorfulBeads';

const BULK_UNIT = 10;
interface Props {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const CounterBoard: FC<Props> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <div>
    <Container centerContent>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" onClick={decrement}>
              -1
            </Button>
            <Button color="green" onClick={increment}>
              +1
            </Button>
          </div>
          <div className="fluid-button">
            <Button fluid color="grey" onClick={() => add(BULK_UNIT)}>
              +{BULK_UNIT}
            </Button>
          </div>
        </Card.Content>
      </Card>
      <EnhancedColorfulBeads />
    </Container>
  </div>
);

export default CounterBoard;
