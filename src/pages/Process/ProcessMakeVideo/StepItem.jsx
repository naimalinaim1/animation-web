import PropTypes from "prop-types";

const StepItem = ({ processStep }) => {
  const { stepNo, stepImg, stepName, stepDescription } = processStep;
  return (
    <div className="lg:grid lg:items-center lg:grid-cols-2">
      <article className={`px-24 ${stepNo % 2 == 0 && "order-last"}`}>
        <h2 className="text-4xl font-bold">
          {stepNo} {stepName}
        </h2>
        <p className={`text-lg mt-6 ${stepNo % 2 == 0 && "text-center"}`}>
          {stepDescription}
        </p>
      </article>
      <div>
        <img className="max:h-[530px] w-full" src={stepImg} alt={stepName} />
      </div>
    </div>
  );
};

StepItem.propTypes = {
  processStep: PropTypes.object.isRequired,
};

export default StepItem;
