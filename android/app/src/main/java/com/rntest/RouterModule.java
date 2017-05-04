package com.rntest;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by watson on 17/5/4.
 */

public class RouterModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext context;

    public RouterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void to(String message) {
        Activity activity = getCurrentActivity();
        if (activity != null && "activityB".equals(message)) {
            activity.startActivity(new Intent(activity, BActivity.class));
        }
    }

    @Override
    public String getName() {
        return "Router";
    }
}
