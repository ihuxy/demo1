import SkeletonLayout from '@layout/darkMode';
import SkeletonContent from '@layout/darkMode/skeletonContent';
import {defaultRouter} from '@app/configs';

const Skeleton=props=><SkeletonLayout menu={defaultRouter} current={defaultRouter}><SkeletonContent /></SkeletonLayout>;

export default Skeleton;


