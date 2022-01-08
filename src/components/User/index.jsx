import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserRequest } from '../../slices/user';

export default function Counter() {
  const userData = useSelector(state => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);

  return (
    <div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}
