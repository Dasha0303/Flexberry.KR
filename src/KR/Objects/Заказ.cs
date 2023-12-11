﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KR
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ.
    /// </summary>
    // *** Start programmer edit section *** (Заказ CustomAttributes)

    // *** End programmer edit section *** (Заказ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказE", new string[] {
            "СпособДоставки as \'Способ доставки\'",
            "ФИОЗаказчика as \'Ф и о заказчика\'",
            "Цвет as \'Цвет\'",
            "Колво as \'Колво\'",
            "НомерЗаказа as \'Номер заказа\'",
            "АдресЗаказ as \'Адрес заказ\'",
            "Материал as \'Материал\'",
            "ОтпускМат as \'Отпуск мат\'",
            "ОтпускМат.ДатаПроводки as \'Дата проводки\'"}, Hidden=new string[] {
            "ОтпускМат.ДатаПроводки"})]
    [MasterViewDefineAttribute("ЗаказE", "ОтпускМат", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ДатаПроводки")]
    [View("ЗаказL", new string[] {
            "СпособДоставки as \'Способ доставки\'",
            "ФИОЗаказчика as \'Ф и о заказчика\'",
            "Цвет as \'Цвет\'",
            "Колво as \'Колво\'",
            "НомерЗаказа as \'Номер заказа\'",
            "АдресЗаказ as \'Адрес заказ\'",
            "Материал as \'Материал\'",
            "ОтпускМат.ДатаПроводки as \'Дата проводки\'"})]
    public class Заказ : ICSSoft.STORMNET.DataObject
    {
        
        private string fСпособДоставки;
        
        private string fФИОЗаказчика;
        
        private string fЦвет;
        
        private string fКолво;
        
        private int fНомерЗаказа;
        
        private string fАдресЗаказ;
        
        private string fМатериал;
        
        private IIS.KR.ОтпускМат fОтпускМат;
        
        // *** Start programmer edit section *** (Заказ CustomMembers)

        // *** End programmer edit section *** (Заказ CustomMembers)

        
        /// <summary>
        /// АдресЗаказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.АдресЗаказ CustomAttributes)

        // *** End programmer edit section *** (Заказ.АдресЗаказ CustomAttributes)
        [StrLen(255)]
        public virtual string АдресЗаказ
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.АдресЗаказ Get start)

                // *** End programmer edit section *** (Заказ.АдресЗаказ Get start)
                string result = this.fАдресЗаказ;
                // *** Start programmer edit section *** (Заказ.АдресЗаказ Get end)

                // *** End programmer edit section *** (Заказ.АдресЗаказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.АдресЗаказ Set start)

                // *** End programmer edit section *** (Заказ.АдресЗаказ Set start)
                this.fАдресЗаказ = value;
                // *** Start programmer edit section *** (Заказ.АдресЗаказ Set end)

                // *** End programmer edit section *** (Заказ.АдресЗаказ Set end)
            }
        }
        
        /// <summary>
        /// Колво.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Колво CustomAttributes)

        // *** End programmer edit section *** (Заказ.Колво CustomAttributes)
        [StrLen(255)]
        public virtual string Колво
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Колво Get start)

                // *** End programmer edit section *** (Заказ.Колво Get start)
                string result = this.fКолво;
                // *** Start programmer edit section *** (Заказ.Колво Get end)

                // *** End programmer edit section *** (Заказ.Колво Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Колво Set start)

                // *** End programmer edit section *** (Заказ.Колво Set start)
                this.fКолво = value;
                // *** Start programmer edit section *** (Заказ.Колво Set end)

                // *** End programmer edit section *** (Заказ.Колво Set end)
            }
        }
        
        /// <summary>
        /// Материал.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Материал CustomAttributes)

        // *** End programmer edit section *** (Заказ.Материал CustomAttributes)
        [StrLen(255)]
        public virtual string Материал
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Материал Get start)

                // *** End programmer edit section *** (Заказ.Материал Get start)
                string result = this.fМатериал;
                // *** Start programmer edit section *** (Заказ.Материал Get end)

                // *** End programmer edit section *** (Заказ.Материал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Материал Set start)

                // *** End programmer edit section *** (Заказ.Материал Set start)
                this.fМатериал = value;
                // *** Start programmer edit section *** (Заказ.Материал Set end)

                // *** End programmer edit section *** (Заказ.Материал Set end)
            }
        }
        
        /// <summary>
        /// НомерЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)
        public virtual int НомерЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get start)
                int result = this.fНомерЗаказа;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set start)
                this.fНомерЗаказа = value;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set end)
            }
        }
        
        /// <summary>
        /// СпособДоставки.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.СпособДоставки CustomAttributes)

        // *** End programmer edit section *** (Заказ.СпособДоставки CustomAttributes)
        [StrLen(255)]
        public virtual string СпособДоставки
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.СпособДоставки Get start)

                // *** End programmer edit section *** (Заказ.СпособДоставки Get start)
                string result = this.fСпособДоставки;
                // *** Start programmer edit section *** (Заказ.СпособДоставки Get end)

                // *** End programmer edit section *** (Заказ.СпособДоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.СпособДоставки Set start)

                // *** End programmer edit section *** (Заказ.СпособДоставки Set start)
                this.fСпособДоставки = value;
                // *** Start programmer edit section *** (Заказ.СпособДоставки Set end)

                // *** End programmer edit section *** (Заказ.СпособДоставки Set end)
            }
        }
        
        /// <summary>
        /// ФИОЗаказчика.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.ФИОЗаказчика CustomAttributes)

        // *** End programmer edit section *** (Заказ.ФИОЗаказчика CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОЗаказчика
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Get start)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Get start)
                string result = this.fФИОЗаказчика;
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Get end)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Set start)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Set start)
                this.fФИОЗаказчика = value;
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Set end)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Set end)
            }
        }
        
        /// <summary>
        /// Цвет.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Цвет CustomAttributes)

        // *** End programmer edit section *** (Заказ.Цвет CustomAttributes)
        [StrLen(255)]
        public virtual string Цвет
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Цвет Get start)

                // *** End programmer edit section *** (Заказ.Цвет Get start)
                string result = this.fЦвет;
                // *** Start programmer edit section *** (Заказ.Цвет Get end)

                // *** End programmer edit section *** (Заказ.Цвет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Цвет Set start)

                // *** End programmer edit section *** (Заказ.Цвет Set start)
                this.fЦвет = value;
                // *** Start programmer edit section *** (Заказ.Цвет Set end)

                // *** End programmer edit section *** (Заказ.Цвет Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.ОтпускМат CustomAttributes)

        // *** End programmer edit section *** (Заказ.ОтпускМат CustomAttributes)
        [PropertyStorage(new string[] {
                "ОтпускМат"})]
        [NotNull()]
        public virtual IIS.KR.ОтпускМат ОтпускМат
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.ОтпускМат Get start)

                // *** End programmer edit section *** (Заказ.ОтпускМат Get start)
                IIS.KR.ОтпускМат result = this.fОтпускМат;
                // *** Start programmer edit section *** (Заказ.ОтпускМат Get end)

                // *** End programmer edit section *** (Заказ.ОтпускМат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.ОтпускМат Set start)

                // *** End programmer edit section *** (Заказ.ОтпускМат Set start)
                this.fОтпускМат = value;
                // *** Start programmer edit section *** (Заказ.ОтпускМат Set end)

                // *** End programmer edit section *** (Заказ.ОтпускМат Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказE", typeof(IIS.KR.Заказ));
                }
            }
            
            /// <summary>
            /// "ЗаказL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказL", typeof(IIS.KR.Заказ));
                }
            }
        }
    }
}
