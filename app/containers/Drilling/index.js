/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unused-prop-types */
/**
 *
 * Drilling
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDrilling from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Drilling() {
  useInjectReducer({ key: 'drilling', reducer });
  useInjectSaga({ key: 'drilling', saga });

  const [operation, setOperation] = useState();
  const [tool, setTool] = useState();
  const [offset, setOffset] = useState();
  const [rpm, setrpm] = useState();
  const [feed, setFeed] = useState();
  const [drill, setDrill] = useState();
  const [program, setProgram] = useState();
  const [peckDrill, setPeckDrill] = useState(false);
  const [programEnd, setProgramEnd] = useState(false);

  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([program], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'myFile.nc';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleSubmit = e => {
    console.log(
      tool,
      operation,
      offset,
      rpm,
      feed,
      drill,
      programEnd,
      peckDrill,
      e,
    );

    fetch('http://www.mocky.io/v2/5ec67e7a3200007900d74e90', {
      method: 'POST',
      body: JSON.stringify({
        tool_no: tool,
        offset_no: offset,
        rpm_no: rpm,
        operation_no: operation,
        feed_no: feed,
        drill_no: drill,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      response.json().then(data => {
        setProgram(data.data.replace('/\n/', '(br)'));
      });
    });
  };

  const clearAll = e => {
    setDrill('');
    setFeed('');
    setOffset('');
    setProgramEnd('');
    setTool('');
    setrpm('');
    setPeckDrill();
    setOperation('');
    setProgram('');
  };

  return (
    <div>
      <Helmet>
        <title>Drilling</title>
        <meta name="description" content="Description of Drilling" />
      </Helmet>
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-center text-center ">
          <h1>CNC Programming Solutions</h1>
          <h4>
            <span className="program-name border border-dark">Drilling</span>
          </h4>
        </div>
      </div>

      <div className="container">
        <div className="grid-container">
          <div className="image-container border border-dark">
            <input
              className="image-caption form-group col-sm-2"
              type="number"
              name="name"
              onChange={e => setDrill(e.target.value)}
              value={drill}
            />
          </div>

          <form className="d-flex flex-column border border-dark default-form">
            <div>
              <label>Operation No</label>
              <input
                className="form-group col-sm-4 "
                type="number"
                onChange={e => setOperation(e.target.value)}
                value={operation}
              />
            </div>
            <div>
              <label>Tool No</label>
              <input
                className="form-group col-sm-4"
                type="number"
                onChange={e => setTool(e.target.value)}
                value={tool}
              />
            </div>
            <div>
              <label>Offset No</label>
              <input
                className="form-group col-sm-4"
                type="number"
                onChange={e => setOffset(e.target.value)}
                value={offset}
              />
            </div>

            <div>
              <label>RPM</label>
              <input
                className="form-group col-sm-4"
                type="number"
                onChange={e => setrpm(e.target.value)}
                value={rpm}
              />
            </div>
            <div>
              <label>Feed</label>
              <input
                className="form-group col-sm-4"
                type="number"
                onChange={e => setFeed(e.target.value)}
                value={feed}
              />
            </div>
            {/* <div>
              <label>CenterBit Depth</label>
              <input
                className="form-group col-sm-4"
                type="number"
                onChange={e => setCenterBit(e.target.value)}
                value={centerBit}
              />
            </div> */}
            <div>
              <label>Peck Drill</label>
              <input
                className="form-group col-sm-4"
                type="checkbox"
                checked={peckDrill}
                onChange={e => setPeckDrill(!peckDrill)}
                value={peckDrill}
              />
            </div>
            <div>
              <label>Program End</label>
              <input
                className="form-group col-sm-4"
                type="checkbox"
                checked={programEnd}
                onChange={e => setProgramEnd(!programEnd)}
                value={programEnd}
              />
            </div>
          </form>
          <div>
            <div className="text-center border border-dark">
              Generated Program
            </div>
            <div>
              <textarea className="" value={program} />
            </div>
          </div>
          <div className="border border-dark">
            <h5>
              <label className="text-danger">Note</label>
            </h5>
            <li>Check the drawing thoroughly before inputing values.</li>
            <li>Use original drills for maximum quality and finish.</li>
            <li>All dimensions should be given in mm.</li>
            <li>Fill all Required fields.</li>
          </div>
          <div className="d-flex flex-column justify-content-around text-center align-items-center border border-dark">
            <button
              type="submit"
              className="btn btn-primary w-75"
              onClick={e => handleSubmit(e)}
            >
              Generate Program
            </button>
            <button
              type="submit"
              className="btn btn-primary w-75"
              onClick={e => clearAll(e)}
            >
              Clear ALL
            </button>
          </div>

          <div className="d-flex flex-column justify-content-around text-center align-items-center border border-dark">
            <button
              type="button"
              className="btn btn-primary w-75"
              onClick={downloadTxtFile}
            >
              Download
            </button>
            {/* <button
              type="button"
              className="btn btn-primary w-75"
              onClick={deleteProgram}
            >
              Delete
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

Drilling.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  drilling: makeSelectDrilling(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Drilling);
