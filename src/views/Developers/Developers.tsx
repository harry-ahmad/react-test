import { useHistory } from 'react-router';
import Dropdown from 'react-dropdown';

export default function DevelopersView(props:any) {
  const history = useHistory();
  const language = ['Any', 'English', 'Urdu'];
  const date = ['Any', 'Today', 'Weekly'];
  
  return (
    <div className="card my-5 mx-3">
      <div className="card-header p-3">
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary-outline"  onClick={()=>history.push('/')}>
              Repositories
            </button>
            <button className="btn btn-primary"  onClick={()=>history.push('/developers')}>
              Developers
            </button>
          </div>
          <div className="col-md-8 align-self-center text-end">
            <span>
              Language:&nbsp;
            </span>
            <Dropdown 
              options={language} 
              value={language[0]} />
            <span>
              Date Range:&nbsp;
            </span>
            <Dropdown 
              options={date} 
              value={date[0]} />
          </div>
        </div>
      </div>
      {props.list.map((x:any,index:any)=>{
        return(
        <div className="card-body" key={index}>
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <p className="card-text">{x.rank}</p>
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <a href={x.url}><img src = {x.avatar} width="70%" alt="avatar"/></a>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h5 className="card-title"><a href={x.url}>{x.name}</a></h5>
                <p className="card-text">{x.username}</p>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <h5 className="card-text">
                  <i className="fa fa-folder-o orange" aria-hidden="true"></i>&nbsp;&nbsp;
                  POPULAR REPO
                </h5>
                <h5 className="card-title">
                  {x.popularRepository.repositoryName !== null && <a href={x.url}>
                    <i className="fa fa-list-alt gray" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                    {x.popularRepository.repositoryName}
                  </a>}
                </h5>
                <p className="card-text">{x.description}</p>
              </div>
              <div className="col-md-3 align-self-center text-end">
                <button className="btn btn-primary-outline">
                  <i className="fa fa-heart-o pink-color" aria-hidden="true"></i>&nbsp;
                  Sponsor
                </button>
                <button className="btn btn-primary-outline">
                  Follow
                </button>
              </div>
          </div>
        </div>
      )})}
      </div>
  );
}
