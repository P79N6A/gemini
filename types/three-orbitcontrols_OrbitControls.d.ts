import { Vector3, Object3D } from "three";

// Type definitions for OrbitControls.js
// Definitions by: zane.zyz <zane.zyz@alibaba-inc.com>

/**
   * This set of controls performs orbiting, dollying (zooming), and panning.
   * Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
   *
   *    Orbit - left mouse / touch: one-finger move
   *    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
   *    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move
*/
interface OrbitControl {
	object: Object3D;

	domElement: Element;

	/**
	 * Set to false to disable this control
	 */
	enabled: boolean;

	/**
	 * "target" sets the location of focus, where the object orbits around
	*/ 
	target: Vector3;
  
	/**
	 * How far you can dolly in and out ( PerspectiveCamera only )
	 */
	minDistance: number;
  
	/**
	 *
	 */
	maxDistance: number;
  
	/**
	 * How far you can zoom in and out ( OrthographicCamera only )
	 */
	minZoom: number;
  
	/**
	 *
	 */
	maxZoom: number;
  
	/**
	 * How far you can orbit vertically, upper and lower limits.
	 * Range is 0 to Math.PI radians.
	 */
	minPolarAngle: number;
  
	/**
	 *
	 */
	maxPolarAngle: number;
  
	/**
	 * How far you can orbit horizontally, upper and lower limits.
	 * If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	 */
	minAzimuthAngle: number;
  
	/**
	 *
	 */
	maxAzimuthAngle: number;
  
	/**
	 * Set to true to enable damping (inertia)
	 * If damping is enabled, you must call controls.update() in your animation loop
	 */
	enableDamping: boolean;
  
	/**
	 *
	 */
	dampingFactor: number;
  
	/**
	 * This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	 * Set to false to disable zooming
	 */
	enableZoom: boolean;
  
	/**
	 *
	 */
	zoomSpeed: number;
  
	/**
	 * Set to false to disable rotating
	 */
	enableRotate: boolean;
  
	/**
	 *
	 */
	rotateSpeed: number;
  
	/**
	 * Set to false to disable panning
	 */
	enablePan: boolean;
  
	/**
	 *
	 */
	panSpeed: number;
  
	/**
	 *
	 */
	screenSpacePanning: boolean;
  
	/**
	 *
	 */
	keyPanSpeed: number;
  
	/**
	 * Set to true to automatically rotate around the target
	 * If auto-rotate is enabled, you must call controls.update() in your animation loop
	 */
	autoRotate: boolean;
  
	/**
	 *
	 */
	autoRotateSpeed: number;
  
	/**
	 * Set to false to disable use of the keys
	 */
	enableKeys: boolean;
  
	/**
	 * The four arrow keys
	 */
	keys: {
	  /**
	   *
	   */
	  LEFT: number;
  
	  /**
	   *
	   */
	  UP: number;
  
	  /**
	   *
	   */
	  RIGHT: number;
  
	  /**
	   *
	   */
	  BOTTOM: number;
	};
  
	/**
	 * Mouse buttons
	 */
	mouseButtons: {};
  
	/**
	 * public methods
	 * @return
	 */
	getPolarAngle(): number;
  
	/**
	 *
	 * @return
	 */
	getAzimuthalAngle(): number;
  
	/**
	 *
	 */
	saveState(): void;
  
	/**
	 *
	 */
	reset(): void;
  
	/**
	 * this method is exposed, but perhaps it would be better if we can make it private...
	 * @return
	 */
	update(): boolean;
  
	/**
	 *
	 */
	dispose(): void;
  }
/**
 * three-orbitcontrols addendum
 */
declare namespace THREE {
  interface OrbitControls {
    /**
     *
     * @param object
     * @param domElement
     * @return
     */
    new (object: Object3D, domElement: Element): OrbitControl;
  }
}

interface OrbitControls_Static {
	new (object: Object3D, domElement: Element): OrbitControl;
}

declare var OrbitControls: OrbitControls_Static;

// for require
declare module "OrbitControls" {
    export=OrbitControls
}

// for es6 import
export default OrbitControls