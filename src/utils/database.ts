import { userList } from '@/mocks/data/userList';
import { userData, userProps } from '@/types/user';

export async function findUser({ searchData, searchSource }: userProps) {
  let data: userData | undefined;
  switch (searchSource) {
    case 'email':
      data = userList.find((user) => user.email === searchData);
      break;
    case 'nickName':
      data = userList.find((user) => user.nickName === searchData);
      break;
  }
  return data;
}

export async function registerUser(userData: userData) {
  userList.push(userData);
}

export async function updateUser({ emailid, data, key }: userProps) {}
