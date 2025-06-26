import { Link, NavLink, Outlet, useMatches } from '@modern-js/runtime/router';
import { useMemo } from 'react';
import { steps } from './constants';

export default function Layout() {
  const matches = useMatches() as Array<{ handle: { stepId?: string } }>;
  const currentStepId = matches
    .map(matchedRoute => matchedRoute?.handle?.stepId)
    ?.at(-1);

  return (
    <div>
      <h2>Wizard {currentStepId}</h2>
      <nav>
        {steps.map(({ id, path, title }) => (
          <li key={id}>
            <NavLink to={path}>
              {currentStepId === id ? '>' : null} {title}{' '}
              {currentStepId === id ? '<' : null}
            </NavLink>
          </li>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

// export function useShoppingJourneyWizard() {
//   const { t } = useTranslate('shopping-journey');
//   const matches = useMatches() as Array<{ handle: { stepId?: string } }>;
//   const currentStepId = matches
//     .map(matchedRoute => matchedRoute?.handle?.stepId)
//     ?.at(-1);
//   const currentStepIndex = shoppingJourneySteps.findIndex(
//     ({ id }) => id === currentStepId,
//   );

//   const wizardData = useMemo(() => {
//     return {
//       currentStepId,
//       steps: shoppingJourneySteps.map(({ id, i18nKey }, index, arr) => {
//         return {
//           id,
//           label: t(i18nKey),
//           isFirst: index === 0,
//           isLast: index === arr.length - 1,
//           isCurrent: index === currentStepIndex,
//           isCompleted: index < currentStepIndex,
//           isFilled: true, //here should be logic which will check if reservation has info from this step,
//         };
//       }),
//     };
//   }, [currentStepId, currentStepIndex, t]);

//   return wizardData;
// }

const shoppingJourneySteps = [
  { id: 'categories', i18nKey: 'categories_label' },
  { id: 'distribution', i18nKey: 'distribution_label' },
  { id: 'checkout', i18nKey: 'checkout_label' },
];
