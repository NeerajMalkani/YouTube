import {StyleSheet, Dimensions} from 'react-native';

export const Styles = StyleSheet.create({
  /* #region Templates */
  container: {
    flex: 1,
    padding: 16,
  },
  /* #endregion */

  /* #region Borders */
  border0: {
    borderWidth: 0,
  },
  border1: {
    borderWidth: 1,
  },
  border2: {
    borderWidth: 2,
  },
  border4: {
    borderWidth: 4,
  },

  borderBottom0: {
    borderBottomWidth: 0,
  },
  borderBottom1: {
    borderBottomWidth: 1,
  },
  borderBottom2: {
    borderBottomWidth: 2,
  },
  borderBottom4: {
    borderBottomWidth: 4,
  },

  borderTop0: {
    borderTopWidth: 0,
  },
  borderTop1: {
    borderTopWidth: 1,
  },
  borderTop2: {
    borderTopWidth: 2,
  },
  borderTop4: {
    borderTopWidth: 4,
  },

  borderLeft0: {
    borderLeftWidth: 0,
  },
  borderLeft1: {
    borderLeftWidth: 1,
  },
  borderLeft2: {
    borderLeftWidth: 2,
  },
  borderLeft4: {
    borderLeftWidth: 4,
  },

  borderRight0: {
    borderRightWidth: 0,
  },
  borderRight1: {
    borderRightWidth: 1,
  },
  borderRight2: {
    borderRightWidth: 2,
  },
  borderRight4: {
    borderRightWidth: 4,
  },

  borderRadius0: {
    borderRadius: 0,
  },
  borderRadius1: {
    borderRadius: 1,
  },
  borderRadius2: {
    borderRadius: 2,
  },
  borderRadius4: {
    borderRadius: 4,
  },
  borderRadius6: {
    borderRadius: 6,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  borderRadius12: {
    borderRadius: 12,
  },
  borderRadius16: {
    borderRadius: 16,
  },
  borderRadius24: {
    borderRadius: 24,
  },
  borderRadius32: {
    borderRadius: 32,
  },
  borderRadius64: {
    borderRadius: 64,
  },
  borderRadius100000: {
    borderRadius: 10000,
  },

  borderBottomRadius0: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  borderBottomRadius1: {
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  borderBottomRadius2: {
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  borderBottomRadius4: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  borderBottomRadius8: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  borderBottomRadius16: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  borderBottomRadius32: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  borderBottomRadius64: {
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 64,
  },

  borderTopRadius0: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  borderTopRadius1: {
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
  borderTopRadius2: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  borderTopRadius4: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  borderTopRadius8: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  borderTopRadius16: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  borderTopRadius32: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  borderTopRadius64: {
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
  },
  /* #endregion */

  /* #region Padding */
  padding0: {
    padding: 0,
  },
  padding2: {
    padding: 2,
  },
  padding4: {
    padding: 4,
  },
  padding8: {
    padding: 8,
  },
  padding12: {
    padding: 12,
  },
  padding16: {
    padding: 16,
  },
  padding24: {
    padding: 24,
  },
  padding32: {
    padding: 32,
  },

  paddingTop0: {
    paddingTop: 0,
  },
  paddingBottom0: {
    paddingBottom: 0,
  },
  paddingStart0: {
    paddingStart: 0,
  },
  paddingEnd0: {
    paddingEnd: 0,
  },

  paddingTop2: {
    paddingTop: 2,
  },
  paddingBottom4: {
    paddingBottom: 4,
  },
  paddingStart12: {
    paddingStart: 12,
  },
  paddingEnd2: {
    paddingEnd: 2,
  },

  paddingTop4: {
    paddingTop: 4,
  },
  paddingStart4: {
    paddingStart: 4,
  },
  paddingEnd4: {
    paddingEnd: 4,
  },

  paddingTop8: {
    paddingTop: 8,
  },
  paddingBottom8: {
    paddingBottom: 8,
  },
  paddingStart8: {
    paddingStart: 8,
  },
  paddingEnd8: {
    paddingEnd: 8,
  },

  paddingTop12: {
    paddingTop: 12,
  },
  paddingBottom12: {
    paddingBottom: 12,
  },
  paddingEnd12: {
    paddingEnd: 12,
  },

  paddingTop16: {
    paddingTop: 16,
  },
  paddingBottom16: {
    paddingBottom: 16,
  },
  paddingStart16: {
    paddingStart: 16,
  },
  paddingEnd16: {
    paddingEnd: 16,
  },

  paddingTop24: {
    paddingTop: 24,
  },
  paddingBottom24: {
    paddingBottom: 24,
  },
  paddingStart24: {
    paddingStart: 24,
  },
  paddingEnd24: {
    paddingEnd: 24,
  },

  paddingTop32: {
    paddingTop: 32,
  },
  paddingBottom32: {
    paddingBottom: 32,
  },
  paddingStart32: {
    paddingStart: 32,
  },
  paddingEnd32: {
    paddingEnd: 32,
  },

  paddingVertical0: {
    paddingVertical: 0,
  },
  paddingVertical2: {
    paddingVertical: 2,
  },
  paddingVertical4: {
    paddingVertical: 4,
  },
  paddingVertical8: {
    paddingVertical: 8,
  },
  paddingVertical12: {
    paddingVertical: 12,
  },
  paddingVertical16: {
    paddingVertical: 16,
  },
  paddingVertical24: {
    paddingVertical: 24,
  },
  paddingVertical32: {
    paddingVertical: 32,
  },

  paddingHorizontal0: {
    paddingHorizontal: 0,
  },
  paddingHorizontal2: {
    paddingHorizontal: 2,
  },
  paddingHorizontal4: {
    paddingHorizontal: 4,
  },
  paddingHorizontal8: {
    paddingHorizontal: 8,
  },
  paddingHorizontal12: {
    paddingHorizontal: 12,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16,
  },
  paddingHorizontal24: {
    paddingHorizontal: 24,
  },
  paddingHorizontal32: {
    paddingHorizontal: 32,
  },
  /* #endregion */

  /* #region Margin */
  margin0: {
    margin: 0,
  },
  margin2: {
    margin: 2,
  },
  margin4: {
    margin: 4,
  },
  margin8: {
    margin: 8,
  },
  margin12: {
    margin: 12,
  },
  margin16: {
    margin: 16,
  },

  marginTop0: {
    marginTop: 0,
  },
  marginBottom0: {
    marginBottom: 0,
  },
  marginStart0: {
    marginStart: 0,
  },
  marginEnd0: {
    marginEnd: 0,
  },

  marginTop2: {
    marginTop: 2,
  },
  marginBottom2: {
    marginBottom: 2,
  },
  marginStart2: {
    marginStart: 2,
  },
  marginEnd2: {
    marginEnd: 2,
  },

  marginTop4: {
    marginTop: 4,
  },
  marginBottom4: {
    marginBottom: 4,
  },
  marginStart4: {
    marginStart: 4,
  },
  marginEnd4: {
    marginEnd: 4,
  },

  marginTop8: {
    marginTop: 8,
  },
  marginBottom8: {
    marginBottom: 8,
  },
  marginStart8: {
    marginStart: 8,
  },
  marginEnd8: {
    marginEnd: 8,
  },

  marginTop12: {
    marginTop: 12,
  },
  marginBottom12: {
    marginBottom: 12,
  },
  marginStart12: {
    marginStart: 12,
  },
  marginEnd12: {
    marginEnd: 12,
  },

  marginTop16: {
    marginTop: 16,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  marginStart16: {
    marginStart: 16,
  },
  marginEnd16: {
    marginEnd: 16,
  },

  marginTop24: {
    marginTop: 24,
  },
  marginBottom24: {
    marginBottom: 24,
  },
  marginStart24: {
    marginStart: 24,
  },
  marginEnd24: {
    marginEnd: 24,
  },

  marginTop32: {
    marginTop: 32,
  },
  marginBottom32: {
    marginBottom: 32,
  },
  marginStart32: {
    marginStart: 32,
  },
  marginEnd32: {
    marginEnd: 32,
  },

  marginTop56: {
    marginTop: 56,
  },
  marginBottom56: {
    marginBottom: 56,
  },
  marginStart56: {
    marginStart: 56,
  },
  marginEnd56: {
    marginEnd: 56,
  },

  marginTop64: {
    marginTop: 64,
  },
  marginBottom64: {
    marginBottom: 64,
  },
  marginStart64: {
    marginStart: 64,
  },
  marginEnd64: {
    marginEnd: 64,
  },

  marginVertical0: {
    marginVertical: 0,
  },
  marginVertical2: {
    marginVertical: 2,
  },
  marginVertical4: {
    marginVertical: 4,
  },
  marginVertical8: {
    marginVertical: 8,
  },
  marginVertical12: {
    marginVertical: 12,
  },
  marginVertical16: {
    marginVertical: 16,
  },
  marginVertical24: {
    marginVertical: 24,
  },
  marginVertical32: {
    marginVertical: 32,
  },

  marginHorizontalmin8: {
    marginHorizontal: -8,
  },
  marginHorizontal0: {
    marginHorizontal: 0,
  },
  marginHorizontal2: {
    marginHorizontal: 2,
  },
  marginHorizontal4: {
    marginHorizontal: 4,
  },
  marginHorizontal8: {
    marginHorizontal: 8,
  },
  marginHorizontal12: {
    marginHorizontal: 12,
  },
  marginHorizontal16: {
    marginHorizontal: 16,
  },
  marginHorizontal24: {
    marginHorizontal: 24,
  },
  marginHorizontal32: {
    marginHorizontal: 32,
  },
  /* #endregion */

  /* #region Flex */
  flex1: {
    flex: 1,
  },
  flex1_2: {
    flex: 1.2,
  },
  flex1_3: {
    flex: 1.3,
  },
  flex1_5: {
    flex: 1.5,
  },
  flex1_8: {
    flex: 1.8,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 9,
  },
  flex10: {
    flex: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },

  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },

  flexAlignStart: {
    alignItems: 'flex-start',
  },
  flexAlignCenter: {
    alignItems: 'center',
  },
  flexAlignEnd: {
    alignItems: 'flex-end',
  },

  flexJustifyStart: {
    justifyContent: 'flex-start',
  },
  flexJustifyCenter: {
    justifyContent: 'center',
  },
  flexJustifyEnd: {
    justifyContent: 'flex-end',
  },

  flexAlignSelfStart: {
    alignSelf: 'flex-start',
  },
  flexAlignSelfCenter: {
    alignSelf: 'center',
  },
  flexAlignSelfEnd: {
    alignSelf: 'flex-end',
  },
  flexSpaceAround: {
    justifyContent: 'space-around',
  },
  flexSpaceBetween: {
    justifyContent: 'space-between',
  },
  /* #endregion */

  /* #region Fonts */
  fontSize8: {
    fontSize: 8,
  },
  fontSize10: {
    fontSize: 10,
  },
  fontSize11: {
    fontSize: 11,
  },
  fontSize12: {
    fontSize: 12,
  },
  fontSize14: {
    fontSize: 14,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize18: {
    fontSize: 18,
  },
  fontSize20: {
    fontSize: 20,
  },
  fontSize24: {
    fontSize: 24,
  },
  fontSize36: {
    fontSize: 36,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  fontRegular: {
    fontWeight: 'normal',
  },
  /* #endregion */

  /* #region Width/Height */
  widthAuto: {
    width: 'auto',
  },
  width1: {
    width: 1,
  },
  width2: {
    width: 2,
  },
  width4: {
    width: 4,
  },
  width8: {
    width: 8,
  },
  width12: {
    width: 12,
  },
  width16: {
    width: 16,
  },
  width24: {
    width: 24,
  },
  width32: {
    width: 32,
  },
  width40: {
    width: 40,
  },
  width48: {
    width: 48,
  },
  width56: {
    width: 56,
  },
  width64: {
    width: 64,
  },
  width72: {
    width: 72,
  },
  width80: {
    width: 80,
  },
  width88: {
    width: 88,
  },
  width96: {
    width: 96,
  },
  width104: {
    width: 104,
  },
  width192: {
    width: 192,
  },
  width248: {
    width: 248,
  },
  width264: {
    width: 264,
  },
  width320: {
    width: 320,
  },
  width25per: {
    width: '25%',
  },
  width50per: {
    width: '50%',
  },
  width75per: {
    width: '75%',
  },
  width100per: {
    width: '100%',
  },
  widthFull: {
    width: Dimensions.get('window').width,
  },
  minWidth24: {
    minWidth: 24,
  },

  height1: {
    height: 1,
  },
  height2: {
    height: 2,
  },
  height4: {
    height: 4,
  },
  height8: {
    height: 8,
  },
  height12: {
    height: 12,
  },
  height16: {
    height: 16,
  },
  height24: {
    height: 24,
  },
  height32: {
    height: 32,
  },
  height40: {
    height: 40,
  },
  height48: {
    height: 48,
  },
  height56: {
    height: 56,
  },
  height64: {
    height: 64,
  },
  height72: {
    height: 72,
  },
  height80: {
    height: 80,
  },
  height96: {
    height: 96,
  },
  height104: {
    height: 104,
  },
  height142: {
    height: 142,
  },
  height160: {
    height: 160,
  },
  height192: {
    height: 192,
  },
  height224: {
    height: 224,
  },
  height320: {
    height: 320,
  },
  height400: {
    height: 400,
  },
  height412: {
    height: 412,
  },
  height428: {
    height: 428,
  },
  height25per: {
    height: '25%',
  },
  height50per: {
    height: '50%',
  },
  height75per: {
    height: '75%',
  },
  height100per: {
    height: '100%',
  },
  heightFull: {
    height: Dimensions.get('window').height,
  },
  /* #endregion */

  /* #region Text */
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  /* #endregion */

  /*#region Position */
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  /*#endregion*/

  /*#region Transform */
  transform45: {
    transform: [{rotate: '45deg'}],
  },
  transform90: {
    transform: [{rotate: '90deg'}],
  },
  transform180: {
    transform: [{rotate: '180deg'}],
  },
  transform270: {
    transform: [{rotate: '270deg'}],
  },
  transform360: {
    transform: [{rotate: '360deg'}],
  },
  transform45M: {
    transform: [{rotate: '-45deg'}],
  },
  transform90M: {
    transform: [{rotate: '-90deg'}],
  },
  transform180M: {
    transform: [{rotate: '-180deg'}],
  },
  transform270M: {
    transform: [{rotate: '-270deg'}],
  },
  transform360M: {
    transform: [{rotate: '-360deg'}],
  },
  /*#endregion*/

  /*#region zIndex */
  zIndex1: {
    zIndex: 1,
  },
  zIndex2: {
    zIndex: 2,
  },
  zIndex3: {
    zIndex: 3,
  },
  zIndex4: {
    zIndex: 4,
  },
  zIndex5: {
    zIndex: 5,
  },
  zIndex6: {
    zIndex: 6,
  },
  zIndex7: {
    zIndex: 7,
  },
  zIndex8: {
    zIndex: 8,
  },
  zIndex9: {
    zIndex: 9,
  },
  /*#endregion */

  /*#region Opacity */
  opacity0: {
    opacity: 0,
  },
  opacity0_5: {
    opacity: 0.5,
  },
  opacity1: {
    opacity: 1,
  },
  /*#endregion */

  /*#region Overflow */
  overflowHidden: {
    overflow: 'hidden',
  },
  overflowScroll: {
    overflow: 'scroll',
  },
  overflowVisible: {
    overflow: 'visible',
  },
  /*#endregion */

  /*#region Position */
  top0: {
    top: 0,
  },
  bottom0: {
    bottom: 0,
  },
  bottom120: {
    bottom: 120,
  },
  /*#endregion */

  /*#region Elevation */
  elevation1: {
    elevation: 1,
  },
  elevation2: {
    elevation: 2,
  },
  elevation3: {
    elevation: 3,
  },
  elevation4: {
    elevation: 4,
  },
  elevation5: {
    elevation: 5,
  },
  /*#endregion */
});
