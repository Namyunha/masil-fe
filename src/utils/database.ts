import { userList } from '@/mocks/data/userList';
import { dbUserProps, userData } from '@/types/user';

export async function findUser({ searchData, searchSource }: dbUserProps) {
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
  console.log('userData = ', userData);
  console.log('before add userList = ', userList);
  userList.push(userData);
  console.log('after add userList = ', userList);
}

export async function updateUser({ emailid, data, key }: dbUserProps) {}
