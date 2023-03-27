import { useParams } from 'react-router-dom';
import Layout from '@components/common/Layout';

const FilterPage = () => {
  const params = useParams();
  console.log(params.category);

  return (
    <Layout hasTabBar title='모두의 웹툰'>
      <div></div>
    </Layout>
  );
};

export default FilterPage;
