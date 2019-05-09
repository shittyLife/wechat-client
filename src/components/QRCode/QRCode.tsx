import * as React from "react";
import "./QRCode.css";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { Dispatch, ActionCreator } from "redux";
import { IQRCodeState, QRCODE_ACTION_TYPES } from "../../store/QRCode/types";
import { fetchUuidAction } from "../../store/QRCode/actions";

interface QRCodeProps extends IQRCodeState {
  fetchUUID: ActionCreator<QRCODE_ACTION_TYPES>;
}

const QRCode: React.FC<QRCodeProps> = ({ src, fetching, error, fetchUUID }) => {
  React.useEffect(() => {
    fetchUUID();
  }, [fetchUUID]);

  return (
    <div className="container qrcode">
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
        ) : (
          <img src={src} alt="loading..." />
        )}
      </div>
      <h3>Scan to log in to Wechat</h3>
      <p>Log in on phone to use Wechat on Web</p>
    </div>
  );
};

const mapStateToProps = ({
  qrcode: { src, uuid, fetching, error }
}: AppState) => ({
  src,
  uuid,
  fetching,
  error
});

const mapDispatchToProps = (dispatch: Dispatch<QRCODE_ACTION_TYPES>) => ({
  fetchUUID: () => dispatch(fetchUuidAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCode);
