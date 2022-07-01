
import 'react-native';
import React from 'react';
import { useLocalization } from '../useLocalization';
import { render } from '@testing-library/react-native';
import { ELanguages } from 'shared/models/enums/localization.enums';



describe.only('Localization hook', () => {
   it('renders translation correclty', () => {
      let results = useLocalization()
      function HookWrapper(){
        results = useLocalization()
        return null
      }
     render(<HookWrapper/>)
     if (results.isArabic){
       expect(results.isRTL).toBeTruthy()
       expect(results.getCurrentLanguage).toBeCalledWith(ELanguages.ar)
      }
    });

});


