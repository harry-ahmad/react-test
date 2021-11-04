import { useHistory } from 'react-router';
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

export default function RepositoriesView(props:any) {
  const history = useHistory();
  const spoken = ['Any', 'English', 'Urdu'];
  const language = ['Any', 'English', 'Urdu'];
  const date = ['Any', 'Today', 'Weekly'];

  return (
    <div className="card my-5 mx-3">
      <div className="card-header p-3">
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={()=>history.push('/')}>
              Repositories
            </button>
            <button className="btn btn-primary-outline" onClick={()=>history.push('/developers')}>
              Developers
            </button>
          </div>
          <div className="col-md-8 align-self-center text-end">
            <span>
              Spoken Language:&nbsp;
            </span>
            <Dropdown 
              options={spoken} 
              value={spoken[0]} />
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
              <div className="col-md-8">
                <h5 className="card-title"><a href={x.url}>{x.repositoryName}</a></h5>
                <p className="card-text">{x.description}</p>
              </div>
              <div className="col-md-4 align-self-center text-end">
                <button className="btn btn-primary-outline">
                  <i className="fa fa-heart-o pink-color" aria-hidden="true"></i>&nbsp;
                  Sponsor
                </button>
                <button className="btn btn-primary-outline">
                  <i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;
                  Star
                </button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-8">
                <a href="/" style={{color:x.languageColor}}>{x.language}</a>
                <a href="/"><i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;{x.totalStars}</a>
                <a href="/"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;{x.forks}</a>
                <span>Built by:&nbsp;</span>
                {x.builtBy.map((y:any,key:any)=>{
                  return(
                    <a href={y.url} key={key}>
                      <img src={y.avatar} width="3%" alt="avatar"/>
                    </a>
                  )
                })}
              </div>
              <div className="col-md-4 align-self-center text-end">
                <span><i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;{x.starsSince} stars today</span>
              </div>
            </div>
          </div>
        )})}
      </div>
  );
}
