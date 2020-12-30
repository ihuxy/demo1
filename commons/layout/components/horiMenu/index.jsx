import {Link} from '@common';
import './index.less';
const render=data=>data.map(v=>{
  const hasChildren=v.children&&v.children.length;
  const active=v.active?'active':'';
  if(hasChildren){
    return <li key={v.name} has-children="true">
      <Link to={v.path} className={active} preventDefault>
        {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
        <span className="txt has-right-icon">{v.name}</span>
        <i className="coll-ico" />
      </Link>
      <ul>{render(v.children)}</ul>
    </li>;
  }
  return <li key={v.name}>
    <Link to={v.path} stopPropagation className={active}>
      {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
      <span className="txt">{v.name}</span>
    </Link>
  </li>;
});
const Index=({menu,style})=><div className="nav-menu" style={style}>
  <ul className="tree-root">
    {render(menu)}
  </ul>
</div>;

export default Index;

