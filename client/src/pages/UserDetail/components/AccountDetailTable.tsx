import styled from 'styled-components';
import { Account } from '../../../types/account';
import { useFormatDate } from '../../../utils/hooks/useFormatDate';
import { useGetBrokerName } from '../../../utils/hooks/useGetBrokerName';
import { useFormatPrice } from '../../Account/hooks/useFormatPrice';
import { useGetStatus } from '../../Account/hooks/useGetStatus';

export default function AccountDetailTable({ account }: { account: Account }) {
  return (
    <>
      <Title>유저 계좌 목록</Title>
      <Table>
        <tbody>
          <Tr>
            <th>계좌명</th>
            <td>{account.name}</td>
            <th>브로커명</th>
            <td>{useGetBrokerName(account.broker_id)}</td>
            <th>계좌상태</th>
            <td>{useGetStatus(account.status)}</td>
          </Tr>
          <Tr>
            <th>계좌번호</th>
            <td>{account.number}</td>
            <th>평가금액</th>
            <td>{useFormatPrice(account.assets)}</td>
            <th>입금금액</th>
            <td>{useFormatPrice(account.payments)}</td>
          </Tr>
          <Tr>
            <th>계좌활성화여부</th>
            <td>{account.is_active ? '활성화' : '비활성화'}</td>
            <th>계좌개설일</th>
            <td>{useFormatDate(account.created_at)}</td>
            <th>최근수정날짜</th>
            <td>{useFormatDate(account.updated_at)}</td>
          </Tr>
        </tbody>
      </Table>
    </>
  );
}

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;

const Tr = styled.tr`
  & th {
    padding: 10px 0;
    font-weight: bold;
  }
  & > td {
    text-align: center;
    width: 13rem;
    border-bottom: 1px solid #999999;
  }
`;

const Table = styled.table`
  margin-bottom: 70px;
  width: 900px;
`;
