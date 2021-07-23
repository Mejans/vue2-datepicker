import DatePicker from 'vue2-datepicker';
import fr from 'date-format-parse/lib/locale/oc';

const lang = {
  formatLocale: oc,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('oc', lang);

export default lang;
