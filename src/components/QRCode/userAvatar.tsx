import * as React from "react";
import "./QRCode.css";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { Dispatch, ActionCreator } from "redux";
import { IQRCodeState, QRCODE_ACTION_TYPES } from "../../store/QRCode/types";
import { fetchUuidAction } from "../../store/QRCode/actions";
import { ILoginState, LOGIN_ACTION_TYPES } from "../../store/loginResult/types";
import { render } from "react-dom";
import { setUserAvatar } from "../../store/loginResult/actions";

interface QRCodeProps extends IQRCodeState, ILoginState {
  fetchUUID: ActionCreator<QRCODE_ACTION_TYPES>;
  setUserAvatar: ActionCreator<LOGIN_ACTION_TYPES>;
}

const QRCode: React.FC<QRCodeProps> = ({
  src,
  fetching,
  error,
  fetchUUID,
  userAvatar,
  setUserAvatar
}) => {
  React.useEffect(() => {
    fetchUUID();
  }, [fetchUUID]);

  return (
    <div className="qrcode-wrapper">
      {error ? (
        <React.Fragment>
          <div
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
          <img src={userAvatar} style={{ padding: "100px 100px" }} />
          <button
            style={{ fontSize: "1.5em" }}
            className="nes-btn is-info"
            onClick={setUserAvatar}>
            Switch Account
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img src={src} alt="loading..." />
          <h3>Scan to log in to Wechat</h3>
          <p>Log in on phone to use Wechat on Web</p>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({
  qrcode: { src, uuid, fetching, error },
  login: { userAvatar }
}: AppState) => ({
  src,
  uuid,
  fetching,
  error,
  userAvatar
});

const mapDispatchToProps = (
  dispatch: Dispatch<QRCODE_ACTION_TYPES | LOGIN_ACTION_TYPES>
) => ({
  fetchUUID: () => dispatch(fetchUuidAction()),
  setUserAvatar: () => dispatch(setUserAvatar(""))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCode);
