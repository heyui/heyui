!(function(e, t) {
	if ("object" == typeof exports && "object" == typeof module)
		module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var o = t();
		for (var r in o) ("object" == typeof exports ? exports : e)[r] = o[r];
	}
})(window, function() {
	return (function(e) {
		var t = {};
		function o(r) {
			if (t[r]) return t[r].exports;
			var a = (t[r] = { i: r, l: !1, exports: {} });
			return e[r].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
		}
		return (
			(o.m = e),
			(o.c = t),
			(o.d = function(e, t, r) {
				o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
			}),
			(o.r = function(e) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(o.t = function(e, t) {
				if ((1 & t && (e = o(e)), 8 & t)) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var r = Object.create(null);
				if (
					(o.r(r),
					Object.defineProperty(r, "default", { enumerable: !0, value: e }),
					2 & t && "string" != typeof e)
				)
					for (var a in e)
						o.d(
							r,
							a,
							function(t) {
								return e[t];
							}.bind(null, a)
						);
				return r;
			}),
			(o.n = function(e) {
				var t =
					e && e.__esModule
						? function() {
								return e.default;
						  }
						: function() {
								return e;
						  };
				return o.d(t, "a", t), t;
			}),
			(o.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(o.p = ""),
			o((o.s = 0))
		);
	})([
		function(e, t, o) {
			e.exports = o(1);
		},
		function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.default = void 0);
			var r = {
				h: {
					locale: "es-ES",
					common: {
						cancel: "Cancelar",
						confirm: "Confirmar",
						clear: "Limpiar",
						nullOptionText: "Seleccione",
						empty: "Vacío",
						any: "Alguno"
					},
					confirm: { title: "Confirmar" },
					checkbox: {
						limitSize: "Puede seleccionar hasta {limitSize} elementos."
					},
					select: {
						nullOptionText: "Seleccione",
						placeholder: "Seleccione",
						emptyContent: "No se han encontrado resultados",
						searchPlaceHolder: "buscar",
						limitSize: "Puede seleccionar hasta {limitSize} elementos."
					},
					category: { placeholder: "Seleccione" },
					cascader: { placeholder: "Seleccione" },
					categoryModal: {
						limitWords: "Puede seleccionar hasta {size} elementos.",
						emptyContent: "No se han encontrado resultados",
						total: "total"
					},
					categoryPicker: {
						nullOptionText: "Seleccione",
						placeholder: "Seleccione",
						total: "total",
						limitSize: "Puede seleccionar hasta {0} elementos."
					},
					autoComplate: {
						placeholder: "Buscar",
						emptyContent: "No se han encontrado resultados"
					},
					validation: {
						base: {
							required: " no puede estar vacío",
							maxLen: " la longitud del texto no puede exceder {value} carácteres",
							minLen: " la longitud del texto no puede ser menor que {value} carácteres",
							max: " no puede ser mayor que {value}",
							min: " no puede ser menor que {value}"
						},
						type: {
							int: " no es el formato correcto de número entero",
							number: " no es el formato numérico correcto",
							email: " no es el formato correcto de correo electrónico",
							url: " no es el formato correcto de URL",
							tel: " no es el formato correcto de número de teléfono",
							mobile: " no es el formato correcto de número de teléfono móvil",
							globalmobile: " no es el formato correcto de número de teléfono móvil internacional"
						}
					},
					date: {
						today: "Hoy",
						yesterday: "Ayer",
						year: "Año",
						month: "Mes",
						week: "Semana",
						quarter: "trimestre",
						day: "Día",
						header: { year: "", month: "", day: "" },
						show: {
							week: "{year} {weeknum}th semana {daystart} - {dayend}",
							weekInput: "{year} {week}th semana",
							quarter: "{year} {quarter}th trimestre"
						},
						months: {
							january: "Enero",
							february: "Febrero",
							march: "Marzo",
							april: "Abril",
							may: "Mayo",
							june: "Junio",
							july: "Julio",
							august: "Agosto",
							september: "Septiembre",
							october: "Octubre",
							november: "Noviembre",
							december: "Diciembre"
						},
						weeks: {
							monday: "Lunes",
							tuesday: "Martes",
							wednesday: "Miércoles",
							thursday: "Jueves",
							friday: "Viernes",
							saturday: "Sábado",
							sunday: "Domingo"
						}
					},
					datepicker: {
						placeholder: "Seleccione la fecha",
						startTime: "Inicio",
						endTime: "Fin",
						customize: "Personalizar",
						start: "Inicio",
						end: "Fin"
					},
					wordlimit: { warn: "Estás limitado a {0} palabras" },
					wordcount: { warn: "Te has excedido {0} palabras" },
					treepicker: {
						selectDesc: "Ha seleccionado {0} elementos",
						placeholder: "Seleccione"
					},
					search: { placeholder: "Buscando...", searchText: "Buscar" },
					taginput: { limitWords: "Has superado el límite" },
					table: { empty: "No se han encontrado resultados" },
					uploader: { upload: "Subir", reUpload: "Subir otra vez" },
					pagination: {
						incorrectFormat:
							"El formato del valor que ingresaste es incorrecto.",
						overSize: "El valor que ingresaste excede el rango",
						totalBefore: "Total",
						totalAfter: "Elementos",
						sizeOfPage: "{size} elementos/página"
					}
				}
			};
			t.default = r;
		}
	]).default;
});
