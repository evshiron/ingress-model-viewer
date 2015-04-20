var constants = {
  teamColors: {
    RESISTANCE: vec4.fromValues(0, 0.7607843137254902, 1, 1.0),
    ENLIGHTENED: vec4.fromValues(0.1568627450980392, 0.9568627450980393, 0.1568627450980392, 1.0),
    NEUTRAL: vec4.fromValues(0.9764705882352941, 0.9764705882352941, 0.9764705882352941, 1.0),
    LOKI: vec4.fromValues(1, 0.1568627450980392, 0.1568627450980392, 1.0)
  },
  qualityColors: {
    EXTREMELY_RARE: vec4.fromValues(0.9803921568627451, 0.39215686274509803, 0.39215686274509803, 1.0),
    VERY_RARE: vec4.fromValues(0.9568627450980393, 0.5215686274509804, 0.9254901960784314, 1.0),
    MORE_RARE: vec4.fromValues(0.7647058823529411, 0, 1, 1.0),
    RARE: vec4.fromValues(0.6666666666666666, 0.5372549019607843, 0.984313725490196, 1.0),
    LESS_COMMON: vec4.fromValues(0.45098039215686275, 0.6588235294117647, 1, 1.0),
    COMMON: vec4.fromValues(0.5098039215686274, 0.9529411764705882, 0.7058823529411765, 1.0),
    VERY_COMMON: vec4.fromValues(0.6980392156862745, 0.6980392156862745, 0.6980392156862745, 1.0),
    L1: vec4.fromValues(0.996078431372549, 0.807843137254902, 0.35294117647058826, 1.0),
    L2: vec4.fromValues(1, 0.6509803921568628, 0.18823529411764706, 1.0),
    L3: vec4.fromValues(1, 0.45098039215686275, 0.08235294117647059, 1.0),
    L4: vec4.fromValues(0.8941176470588236, 0, 0, 1.0),
    L5: vec4.fromValues(0.9921568627450981, 0.1607843137254902, 0.5725490196078431, 1.0),
    L6: vec4.fromValues(0.9215686274509803, 0.14901960784313725, 0.803921568627451, 1.0),
    L7: vec4.fromValues(0.7568627450980392, 0.1411764705882353, 0.8784313725490196, 1.0),
    L8: vec4.fromValues(0.5882352941176471, 0.15294117647058825, 0.9568627450980393, 1.0)
  },
  anomalyColors: {
    1: vec4.fromValues(1.0, 0.5686274509803921, 0.21176470588235294, 1.0),
    2: vec4.fromValues(1.0, 0.3215686274509804, 0.9058823529411765, 1.0),
    3: vec4.fromValues(0.6196078431372549, 0.35294117647058826, 1.0, 1.0),
    4: vec4.fromValues(0.8431372549019608, 0.27058823529411763, 0.27058823529411763, 1.0),
    5: vec4.fromValues(1.0, 0.9450980392156862, 0.0, 1.0),
    6: vec4.fromValues(0.6509803921568628, 1.0, 0.9019607843137255, 1.0),
    7: vec4.fromValues(0.5725490196078431, 0.5803921568627451, 0.592156862745098, 1.0)
  },
  artifactGlowColors: {
    Helios: {
      Red: vec4.fromValues(0.92, 0.51, 0.14, 1.0),
      Purple: vec4.fromValues(1.0, 0.87, 0.55, 1.0),
      Target: vec4.fromValues(1.0, 0.72, 0.0, 1.0)
    },
    Amar: {
      Target: vec4.fromValues(0.62, 0.22, 0.62, 1.0),
      Red: vec4.fromValues(0.79, 0.11, 0.49, 1.0),
      Purple: vec4.fromValues(0.58, 0.17, 1.0, 1.0)
    },
    Jarvis: {
      Target: vec4.fromValues(0.62, 0.22, 0.62, 1.0),
      Red: vec4.fromValues(0.79, 0.11, 0.49, 1.0),
      Purple: vec4.fromValues(0.58, 0.17, 1.0, 1.0)
    },
    Shonin: {
      Red: vec4.fromValues(0.78, 0.84, 1.0, 1.0),
      Purple: vec4.fromValues(0.25, 0.81, 1.0, 1.0),
      Target: vec4.fromValues(0.70, 0.70, 0.70, 1.0)
    },
    Lightman: {
      Red: vec4.fromValues(1.0, 0.44, 0.45, 1.0),
      Purple: vec4.fromValues(1.0, 0.24, 0.25, 1.0),
      Target: vec4.fromValues(0.74, 0.0, 0.02, 1.0)
    }
  },
  xmColors: {
    coreGlow: vec4.fromValues(0.92, 0.7, 0.89, 1.0),
    coreGlowAlt: vec4.fromValues(0.6, 0.4, 0.6, 0.8),
    coreGlowAda: vec4.fromValues(0, 0.7607843137254902, 1, 1.0),
    coreGlowJarvis: vec4.fromValues(0.1568627450980392, 0.9568627450980393, 0.1568627450980392, 1.0)
  },
  Mesh: {
    Inventory: {
      Xmp: 'XmpMesh',
      XmpXm: 'XmpXMMesh',
      Ultrastrike: 'UltrastrikeMesh',
      UltrastrikeXm: 'UltrastrikeXMMesh',
      ResShield: 'ResShieldMesh',
      ResShieldXm: 'ResShieldXMMesh',
      PowerCube: 'PowerCubeMesh',
      PowerCubeXm: 'PowerCubeXmMesh',
      LinkAmp: 'LinkAmpMesh',
      LinkAmpXm: 'LinkAmpXmMesh',
      HeatSink: 'HeatSinkMesh',
      HeatSinkXm: 'HeatSinkXmMesh',
      MultiHack: 'MultiHackMesh',
      MultiHackXm: 'MultiHackXmMesh',
      ForceAmp: 'ForceAmpMesh',
      ForceAmpXm: 'ForceAmpXmMesh',
      Turret: 'TurretMesh',
      TurretXm: 'TurretXmMesh',
      FlipCardAda: 'FlipCardMeshAda',
      FlipCardJarvis: 'FlipCardMeshJarvis',
      FlipCardXm: 'FlipCardXmMesh',
      Resonator: 'ResonatorMesh',
      ResonatorXm: 'ResonatorXMMesh',
      Capsule: 'CapsuleMesh',
      CapsuleXm: 'CapsuleXmMesh',
      ExtraShield: 'ExtraShieldMesh',
      MediaCube: 'MediaCubeMesh',
      MediaPlaneMesh: 'MediaPlaneMesh'
    },
    Resource: {
      Xmp: 'XmpResourceUnitMesh',
      PortalKeyResourceUnit: 'PortalKeyResourceUnit',
      Ultrastrike: 'UltrastrikeResourceUnitMesh',
      PowerCube: 'PowerCubeResourceUnitMesh',
      LinkAmp: 'LinkAmpResourceUnitMesh',
      HeatSink: 'HeatSinkResourceUnitMesh',
      MultiHack: 'MultiHackResourceUnitMesh',
      ForceAmp: 'ForceAmpResourceUnitMesh',
      Turret: 'TurretResourceUnitMesh',
      FlipCardAda: 'FlipCardResourceUnitMeshAda',
      FlipCardJarvis: 'FlipCardResourceUnitMeshJarvis',
      Resonator: 'ResonatorResourceUnitMesh',
      PortalShield: 'PortalShieldResourceUnitMesh',
      Capsule: 'CapsuleResourceUnitMesh',
      ExtraShield: 'ExtraShieldResourceUnitMesh',
    },
    Player: {
      Player: 'PlayerMesh',
      PlayerEdge: 'PlayerMeshEdge',
      PlayerReflection: 'PlayerMeshReflection',
      PlayerGlow: 'PlayerMeshGlow',
      BreadCrumb: 'BreadCrumbMesh',
      Compass: 'CompassMesh'
    },
    Ornament: {
      MeetupPoint: 'OrnamentMeetupPointMesh',
      FinishPoint: 'OrnamentFinishPointMesh',
      Cluster: 'OrnamentClusterMesh',
      Volatile: 'OrnamentVolatileMesh'
    },
    Artifact: {
      Helios: {
        Helios1: 'Helios1',
        HeliosFrozen1: 'HeliosFrozen1',
        Helios2: 'Helios2',
        HeliosFrozen2: 'HeliosFrozen2',
        Helios3: 'Helios3',
        HeliosFrozen3: 'HeliosFrozen3',
        Helios4: 'Helios4',
        HeliosFrozen4: 'HeliosFrozen4',
        Helios5: 'Helios5',
        HeliosFrozen5: 'HeliosFrozen5',
        Helios6: 'Helios6',
        HeliosFrozen6: 'HeliosFrozen6',
        Helios7: 'Helios7',
        HeliosFrozen7: 'HeliosFrozen7',
        Helios8: 'Helios8',
        HeliosFrozen8: 'HeliosFrozen8',
        Helios9: 'Helios9',
        HeliosFrozen9: 'HeliosFrozen9',
        Helios10: 'Helios10',
        HeliosFrozen10: 'HeliosFrozen10',
        Helios11: 'Helios11',
        HeliosFrozen11: 'HeliosFrozen11',
        Helios12: 'Helios12',
        HeliosFrozen12: 'HeliosFrozen12',
        Helios13: 'Helios13',
        HeliosFrozen13: 'HeliosFrozen13',
        Helios14: 'Helios14',
        HeliosFrozen14: 'HeliosFrozen14',
        Helios15: 'Helios15',
        HeliosFrozen15: 'HeliosFrozen15',
        Helios16: 'Helios16',
        HeliosFrozen16: 'HeliosFrozen16',
        Helios17: 'Helios17',
        HeliosFrozen17: 'HeliosFrozen17',
        Helios18: 'Helios18',
        HeliosFrozen18: 'HeliosFrozen18',
        Helios19: 'Helios19',
        HeliosFrozen19: 'HeliosFrozen19',
        Helios20: 'Helios20',
        HeliosFrozen20: 'HeliosFrozen20',
        Helios21: 'Helios21',
        HeliosFrozen21: 'HeliosFrozen21',
        Helios22: 'Helios22',
        HeliosFrozen22: 'HeliosFrozen22',
        Helios23: 'Helios23',
        HeliosFrozen23: 'HeliosFrozen23',
        Helios24: 'Helios24',
        HeliosFrozen24: 'HeliosFrozen24',
        Helios25: 'Helios25',
        HeliosFrozen25: 'HeliosFrozen25',
        Helios26: 'Helios26',
        HeliosFrozen26: 'HeliosFrozen26',
        Helios27: 'Helios27',
        HeliosFrozen27: 'HeliosFrozen27',
        Helios28: 'Helios28',
        HeliosFrozen28: 'HeliosFrozen28',
        Helios29: 'Helios29',
        HeliosFrozen29: 'HeliosFrozen29',
        Helios30: 'Helios30',
        HeliosFrozen30: 'HeliosFrozen30',
        Helios31: 'Helios31',
        HeliosFrozen31: 'HeliosFrozen31',
        Helios32: 'Helios32',
        HeliosFrozen32: 'HeliosFrozen32',
        Helios33: 'Helios33',
        HeliosFrozen33: 'HeliosFrozen33',
        Helios34: 'Helios34',
        HeliosFrozen34: 'HeliosFrozen34',
        Helios35: 'Helios35',
        HeliosFrozen35: 'HeliosFrozen35',
        Helios36: 'Helios36',
        HeliosFrozen36: 'HeliosFrozen36',
        Helios37: 'Helios37',
        HeliosFrozen37: 'HeliosFrozen37',
        Helios38: 'Helios38',
        HeliosFrozen38: 'HeliosFrozen38',
        Helios39: 'Helios39',
        HeliosFrozen39: 'HeliosFrozen39',
        Helios40: 'Helios40',
        HeliosFrozen40: 'HeliosFrozen40'
      },
      Amar: {
        Amar1: 'Amar1',
        AmarFrozen1: 'AmarFrozen1',
        Amar2: 'Amar2',
        AmarFrozen2: 'AmarFrozen2',
        Amar3: 'Amar3',
        AmarFrozen3: 'AmarFrozen3',
        Amar4: 'Amar4',
        AmarFrozen4: 'AmarFrozen4',
        Amar5: 'Amar5',
        AmarFrozen5: 'AmarFrozen5',
        Amar6: 'Amar6',
        AmarFrozen6: 'AmarFrozen6',
        Amar7: 'Amar7',
        AmarFrozen7: 'AmarFrozen7',
        Amar8: 'Amar8',
        AmarFrozen8: 'AmarFrozen8',
        Amar9: 'Amar9',
        AmarFrozen9: 'AmarFrozen9',
        Amar10: 'Amar10',
        AmarFrozen10: 'AmarFrozen10',
        Amar11: 'Amar11',
        AmarFrozen11: 'AmarFrozen11',
        Amar12: 'Amar12',
        AmarFrozen12: 'AmarFrozen12',
        Amar13: 'Amar13',
        AmarFrozen13: 'AmarFrozen13',
        Amar14: 'Amar14',
        AmarFrozen14: 'AmarFrozen14',
        Amar15: 'Amar15',
        AmarFrozen15: 'AmarFrozen15',
        Amar16: 'Amar16',
        AmarFrozen16: 'AmarFrozen16',
        Amar17: 'Amar17',
        AmarFrozen17: 'AmarFrozen17'
      },
      Jarvis: {
        Jarvis1: 'Jarvis1',
        Jarvis2: 'Jarvis2',
        Jarvis3: 'Jarvis3',
        Jarvis4: 'Jarvis4',
        Jarvis5: 'Jarvis5',
        Jarvis6: 'Jarvis6',
        Jarvis7: 'Jarvis7',
        Jarvis8: 'Jarvis8',
        Jarvis9: 'Jarvis9',
        Jarvis10: 'Jarvis10',
        Jarvis11: 'Jarvis11',
        Jarvis12: 'Jarvis12',
        Jarvis13: 'Jarvis13'
      },
      Shonin: {
        Shonin1: "Shonin1",
        ShoninFrozen1: "ShoninFrozen1",
        Shonin2: "Shonin2",
        ShoninFrozen2: "ShoninFrozen2",
        Shonin3: "Shonin3",
        ShoninFrozen3: "ShoninFrozen3",
        Shonin4: "Shonin4",
        ShoninFrozen4: "ShoninFrozen4",
        Shonin5: "Shonin5",
        ShoninFrozen5: "ShoninFrozen5",
        Shonin6: "Shonin6",
        ShoninFrozen6: "ShoninFrozen6",
        Shonin7: "Shonin7",
        ShoninFrozen7: "ShoninFrozen7",
        Shonin8: "Shonin8",
        ShoninFrozen8: "ShoninFrozen8",
        Shonin9: "Shonin9",
        ShoninFrozen9: "ShoninFrozen9",
        Shonin10: "Shonin10",
        ShoninFrozen10: "ShoninFrozen10",
        Shonin11: "Shonin11",
        ShoninFrozen11: "ShoninFrozen11",
        Shonin12: "Shonin12",
        ShoninFrozen12: "ShoninFrozen12",
        Shonin13: "Shonin13",
        ShoninFrozen13: "ShoninFrozen13",
        Shonin14: "Shonin14",
        ShoninFrozen14: "ShoninFrozen14",
        Shonin15: "Shonin15",
        ShoninFrozen15: "ShoninFrozen15",
        Shonin16: "Shonin16",
        ShoninFrozen16: "ShoninFrozen16",
        Shonin17: "Shonin17",
        ShoninFrozen17: "ShoninFrozen17",
        Shonin18: "Shonin18",
        ShoninFrozen18: "ShoninFrozen18",
        Shonin19: "Shonin19",
        ShoninFrozen19: "ShoninFrozen19",
        Shonin20: "Shonin20",
        ShoninFrozen20: "ShoninFrozen20",
        Shonin21: "Shonin21",
        ShoninFrozen21: "ShoninFrozen21",
        Shonin22: "Shonin22",
        ShoninFrozen22: "ShoninFrozen22",
        Shonin23: "Shonin23",
        ShoninFrozen23: "ShoninFrozen23",
        Shonin24: "Shonin24",
        ShoninFrozen24: "ShoninFrozen24",
        Shonin25: "Shonin25",
        ShoninFrozen25: "ShoninFrozen25",
        Shonin26: "Shonin26",
        ShoninFrozen26: "ShoninFrozen26",
        Shonin27: "Shonin27",
        ShoninFrozen27: "ShoninFrozen27",
        Shonin28: "Shonin28",
        ShoninFrozen28: "ShoninFrozen28",
        Shonin29: "Shonin29",
        ShoninFrozen29: "ShoninFrozen29",
        Shonin30: "Shonin30",
        ShoninFrozen30: "ShoninFrozen30",
        Shonin31: "Shonin31",
        ShoninFrozen31: "ShoninFrozen31"
      },
      Lightman: {
        Lightman1: "Lightman1",
        LightmanFrozen1: "LightmanFrozen1",
        Lightman2: "Lightman2",
        LightmanFrozen2: "LightmanFrozen2",
        Lightman3: "Lightman3",
        LightmanFrozen3: "LightmanFrozen3",
        Lightman4: "Lightman4",
        LightmanFrozen4: "LightmanFrozen4",
        Lightman5: "Lightman5",
        LightmanFrozen5: "LightmanFrozen5",
        Lightman6: "Lightman6",
        LightmanFrozen6: "LightmanFrozen6",
        Lightman7: "Lightman7",
        LightmanFrozen7: "LightmanFrozen7",
        Lightman8: "Lightman8",
        LightmanFrozen8: "LightmanFrozen8",
        Lightman9: "Lightman9",
        LightmanFrozen9: "LightmanFrozen9",
        Lightman10: "Lightman10",
        LightmanFrozen10: "LightmanFrozen10",
        Lightman11: "Lightman11",
        LightmanFrozen11: "LightmanFrozen11",
        Lightman12: "Lightman12",
        LightmanFrozen12: "LightmanFrozen12",
        Lightman13: "Lightman13",
        LightmanFrozen13: "LightmanFrozen13",
        Lightman14: "Lightman14",
        LightmanFrozen14: "LightmanFrozen14",
        Lightman15: "Lightman15",
        LightmanFrozen15: "LightmanFrozen15",
        Lightman16: "Lightman16",
        LightmanFrozen16: "LightmanFrozen16",
        Lightman17: "Lightman17",
        LightmanFrozen17: "LightmanFrozen17",
        Lightman18: "Lightman18",
        LightmanFrozen18: "LightmanFrozen18",
        Lightman19: "Lightman19",
        LightmanFrozen19: "LightmanFrozen19",
        Lightman20: "Lightman20",
        LightmanFrozen20: "LightmanFrozen20",
        Lightman21: "Lightman21",
        LightmanFrozen21: "LightmanFrozen21",
        Lightman22: "Lightman22",
        LightmanFrozen22: "LightmanFrozen22",
        Lightman23: "Lightman23",
        LightmanFrozen23: "LightmanFrozen23",
        Lightman24: "Lightman24",
        LightmanFrozen24: "LightmanFrozen24",
        Lightman25: "Lightman25",
        LightmanFrozen25: "LightmanFrozen25",
        Lightman26: "Lightman26",
        LightmanFrozen26: "LightmanFrozen26",
        Lightman27: "Lightman27",
        LightmanFrozen27: "LightmanFrozen27",
        Lightman28: "Lightman28",
        LightmanFrozen28: "LightmanFrozen28",
        Lightman29: "Lightman29",
        LightmanFrozen29: "LightmanFrozen29",
        Lightman30: "Lightman30",
        LightmanFrozen30: "LightmanFrozen30",
        Lightman31: "Lightman31",
        LightmanFrozen31: "LightmanFrozen31",
        Lightman32: "Lightman32",
        LightmanFrozen32: "LightmanFrozen32",
        Lightman33: "Lightman33",
        LightmanFrozen33: "LightmanFrozen33",
        Lightman34: "Lightman34",
        LightmanFrozen34: "LightmanFrozen34",
        Lightman35: "Lightman35",
        LightmanFrozen35: "LightmanFrozen35",
        Lightman36: "Lightman36",
        LightmanFrozen36: "LightmanFrozen36",
        Lightman37: "Lightman37",
        LightmanFrozen37: "LightmanFrozen37",
        Lightman38: "Lightman38",
        LightmanFrozen38: "LightmanFrozen38",
        Lightman39: "Lightman39",
        LightmanFrozen39: "LightmanFrozen39",
        Lightman40: "Lightman40",
        LightmanFrozen40: "LightmanFrozen40",
        Lightman41: "Lightman41",
        LightmanFrozen41: "LightmanFrozen41"
      }
    },
    World: {
      Shield: 'PortalShieldMesh',
      Portal: 'TexturedPortalMesh',
      Waypoint: 'TexturedScannerFTMesh',
      Resonator: 'ResonatorUnitLowResMesh',
      XmpRing: 'XmpRingMesh',
      UltraStrikeRing: 'UltraStrikeRingMesh',
      UltraStrikeColumn: 'UltraStrikeColumnMesh',
      ArtifactsRedGlow: 'ArtifactsRedGlow',
      ArtifactsGreenGlow: 'ArtifactsGreenGlow',
      ArtifactsPurpleGlow: 'ArtifactsPurpleGlow',
      ArtifactsTargetGlow: 'ArtifactsTargetGlow',
      SingleResonator: 'SingleResonatorMesh'
    }
  },
  Program: {
    Bicolored: 'bicolor_textured',
    Textured: 'textured',
    Glowramp: 'portal_scanner',
    Xm: 'xm',
    ShieldEffect: 'shield',
    Atmosphere: 'atmosphere'
  },
  Texture: {
    FlipCard: 'FlipCardTexture',
    Xm: 'ObjectXMTexture',
    Glowramp: 'GlowrampTexture',
    Media: 'MediaCubeTexture',
    Waypoint: 'FtWaypointTexture',
    ShieldEffect: 'PortalShieldTexture',
    MediaCube: 'MediaCubeTexture',
    ColorGlow: 'ColorGlowTexture',
    TargetGlow: 'TargetGlowTexture',
    ArtifactHelios: 'ArtifactHeliosTexture',
    ArtifactAmar: 'ArtifactAmarTexture',
    ArtifactJarvis: 'ArtifactJarvisTexture',
    ArtifactShonin: 'ArtifactShoninTexture',
    ArtifactLightman: 'ArtifactLightmanTexture'
  }
};

imv.Constants = constants;
