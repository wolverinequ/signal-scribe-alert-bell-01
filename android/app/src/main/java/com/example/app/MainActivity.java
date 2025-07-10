package com.example.app;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Register the SAF plugin
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(SafPlugin.class);
        }});
    }
}