import * as React from "react";
import "./QRCode.css";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { Dispatch, ActionCreator } from "redux";
import { IQRCodeState, QRCODE_ACTION_TYPES } from "../../store/QRCode/types";
import { fetchUuidAction } from "../../store/QRCode/actions";
import { ILoginState, LOGIN_ACTION_TYPES } from "../../store/loginResult/types";
import { setUserAvatar } from "../../store/loginResult/actions";
import { History } from "history";
import { IInitState } from "../../store/initResult/reducer";

interface QRCodeProps extends IQRCodeState, ILoginState, IInitState {
  fetchUUID: ActionCreator<QRCODE_ACTION_TYPES>;
  resetUserAvatar: ActionCreator<LOGIN_ACTION_TYPES>;
  history: History;
}

function useDidUpdateEffect(fn: Function, inputs: Array<any>){
  const didMountRef = React.useRef(false);
  React.useEffect(()=>{
    if(didMountRef.current){
      fn();
    }else{
      didMountRef.current = true;
    }
  }, inputs)
}

const QRCode: React.FC<QRCodeProps> = ({
  src,
  fetching,
  error,
  fetchUUID,
  userAvatar,
  resetUserAvatar,
  history,
  ContactList
}) => {
  

  React.useEffect(() => {
    fetchUUID();
  }, []);

  // skip first run upon the initial render
  useDidUpdateEffect(()=>{
    history.push('/main');
  }, [ContactList])


  return (
    <div className="qrcode-wrapper">
      {error ? (
        <React.Fragment>
          <div>
            className="nes-container is-rounded"
            style={{ textAlign: "center" }}>
            <p>Opps, something went wrong. Check your network connection.</p>
          </div>
          <br />
          <button className="nes-btn is-warning" onClick={fetchUUID}>
            Reload
          </button>
        </React.Fragment>
      ) : userAvatar ? (
        <React.Fragment>
          <img className="user-avatar" src={userAvatar} />
          <button
            style={{ fontSize: "1.5em", marginTop: "25px" }}
            className="nes-btn is-warning"
            onClick={resetUserAvatar}>
            Switch Account
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img className="qrcode-img" src={src} alt="loading..." />
          <h3>Scan to log in to Wechat</h3>
          <p>Log in on phone to use Wechat on Web</p>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({
  qrcode: { src, uuid, fetching, error },
  login: { userAvatar },
  initResult: { ContactList }
}: AppState) => ({
  src,
  uuid,
  fetching,
  error,
  userAvatar,
  ContactList
});

const mapDispatchToProps = (
  dispatch: Dispatch<QRCODE_ACTION_TYPES | LOGIN_ACTION_TYPES>
) => ({
  fetchUUID: () => dispatch(fetchUuidAction()),
  resetUserAvatar: () => dispatch(setUserAvatar(""))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCode);
