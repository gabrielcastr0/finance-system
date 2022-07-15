import * as Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import {formatCurrentMonth} from '../../helpers/dateFilter';
import {ResumeItem} from '../ResumeItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return(
    <Styled.Container>
      <Styled.MonthArea>
        <Styled.MonthArrow onClick={handlePrevMonth}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Styled.MonthArrow>
        <Styled.MonthTitle>{formatCurrentMonth(currentMonth)}</Styled.MonthTitle>
        <Styled.MonthArrow onClick={handleNextMonth}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Styled.MonthArrow>
      </Styled.MonthArea>

      <Styled.ResumeArea>
        <ResumeItem title="Receita" value={income}/>
        <ResumeItem title="Despesas" value={expense}/>
        <ResumeItem title="Balanço" value={income - expense} color={(income-expense) < 0 ? 'red' : '#00FF00'} />
      </Styled.ResumeArea>

    </Styled.Container>
  );
}