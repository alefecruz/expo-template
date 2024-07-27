import { OrientationLock, lockAsync } from './adapter';

type IScreenOrientation = keyof typeof OrientationLock;

export const changeScreenOrientation = async (position: IScreenOrientation) => {
  await lockAsync(OrientationLock[position]);
};
